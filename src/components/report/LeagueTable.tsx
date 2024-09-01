'use client';
import axios from 'axios';
import { useRouter, usePathname, useSearchParams, redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { LOGIN_URL } from '@/config';

import { nanoid } from 'nanoid';
import { BarChart } from '../charts/BarChart';

export default function LeagueTable({ data }: any) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    });

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [exporting, setExporting] = useState(false);
    const [region, setRegion] = useState("all"); // Set default to "all" to show all regions initially
    const [filteredData, setFilteredData] = useState(data.leagueTable);

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Number of Inspections',
                data: [],
                backgroundColor: 'teal',
            },
        ],
    });

    // Step 1: Populate chart and table initially
    useEffect(() => {
        updateChartData(filteredData);
    }, [filteredData]);

    // Step 2: Handle region change
    const handleFilter = (region: string) => {
        setRegion(region); // Update region state
        if (region === "all") {
            setFilteredData(data.leagueTable); // Show all data if "all" is selected
        } else {
            const filtered = data.leagueTable.filter(
                (district: any) => district.Region.id === parseInt(region)
            );
            setFilteredData(filtered);
        }
    };

    // Step 3: Update chart data based on filtered data
    const updateChartData = (tableData: any) => {
        const labels = tableData.map((district: any) => `${district.Region.name} - ${district.name}`);
        const inspectionCounts = tableData.map((district: any) => district._count.Inspection);

        setChartData({
            labels,
            datasets: [
                {
                    label: 'Number of Inspections',
                    data: inspectionCounts,
                    backgroundColor: 'teal',
                },
            ],
        });
    };

    const handleExportAll = async () => {
        try {
            setExporting(true);
            let searchText = searchParams.get('searchText');

            const response = await axios.get(
                `/api/report/user-submissions?exportFile=true&searchText=${searchText}`,
            );
            setExporting(false);

            if (response.status == 200) {
                router.replace(response.data);
            }
        } catch (error) {
            setExporting(false);
            console.log(error);
        }
    };

    return (
        <main id="main" className="main">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <button
                                type="button"
                                className="btn btn-sm btn-success"
                                onClick={() => handleExportAll()}
                            >
                                <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                {exporting ? 'Exporting...' : 'Export as Excel'}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body table-responsive">
                            <h5 className="card-title">LEAGUE TABLE</h5>
                            <div className="mb-6 position-relative col-lg-6 col-md-12">
                                <div className="col-lg-6 mb-3">
                                    <label className="col-sm-12 col-form-label">Select region</label>
                                    <div className="col-sm-12">
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            onChange={(e: any) => handleFilter(e.target.value)}
                                            value={region}
                                        >
                                            <option value="all">All Regions</option> {/* Add an option to reset the filter */}
                                            {data.regions.map((rg: any) => (
                                                <option key={rg.id} value={rg.id}> {rg.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <BarChart data={chartData} />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body table-responsive" style={{ height: '500px' }}>
                            <h5 className="card-title">LEAGUE TABLE</h5>
                            <table className="table datatable table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Region</th>
                                        <th scope="col">Number of Submissions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData?.map((lt: any) => (
                                        <tr key={nanoid()}>
                                            <td>{lt.name}</td>
                                            <td>{lt.Region?.name}</td>
                                            <td>{lt._count?.Inspection}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
