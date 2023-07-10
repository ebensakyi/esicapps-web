import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

const ResidentialPremisesInfoEdit = ({ data }) => {
  const router = useRouter();

  const query = router.query;

  let formId = query.inspectionFormId;
  let published = query.published;

  const [toiletAvailability, setToiletAvailability] = useState();
  const [bathroomAvailability, setBathroomAvailability] = useState();
  const [drainAvailability, setDrainAvailability] = useState();
  const [handWashingAvailability, setHandWashingAvailability] = useState();
  const [householdNumber, setHouseHoldNumber] = useState();
  const [maleNumber, setMaleNumber] = useState();
  const [femaleNumber, setFemaleNumber] = useState();
  const [animalAvailability, setAnimalAvailability] = useState();
  const [animalNumber, setAnimalNumber] = useState();
  const [animal, setAnimal] = useState();
  const [vaccinationProof, setVaccinationProof] = useState();
  const [animalSpaceCondition, setAnimalSpaceCondition] = useState();

useEffect(() => {
  setToiletAvailability(
    data?.submittedData?.ResidentialPremisesInfoSection?.toiletAvailability?.id
  );
setBathroomAvailability( data?.submittedData?.ResidentialPremisesInfoSection?.bathroomAvailability?.id)
setDrainAvailability( data?.submittedData?.ResidentialPremisesInfoSection?.drainsAvailability?.id)
setHandWashingAvailability( data?.submittedData?.ResidentialPremisesInfoSection?.approvedHandwashingFacilityAvailability?.id)
setHouseHoldNumber(data?.submittedData?.ResidentialPremisesInfoSection?.householdNumber)
setMaleNumber(data?.submittedData?.ResidentialPremisesInfoSection?.maleOccupantNumber)
setFemaleNumber(data?.submittedData?.ResidentialPremisesInfoSection?.femaleOccupantNumber)
setAnimalAvailability( data?.submittedData?.ResidentialPremisesInfoSection?.animalAvailability?.id) 
setAnimalNumber(data?.submittedData?.ResidentialPremisesInfoSection?.animalNumber)
setVaccinationProof( data?.submittedData?.ResidentialPremisesInfoSection?.vaccinationProof?.id)
setAnimalSpaceCondition( data?.submittedData?.ResidentialPremisesInfoSection?.animalSpaceCondition?.id)
},[])
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">
                      RESIDENTIAL INFORMATION SECTION
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.toiletAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Toilet facility availabilty
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setToiletAvailability(e.target.value);
                          }}
                          value={toiletAvailability}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Available</option>
                          <option value={2}>Not Available</option>
                        </select>
                        {/* <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.ResidentialPremisesInfoSection
                              .toiletAvailability.name
                          }
                          readOnly="readOnly"
                        /> */}
                      </div>
                    ) : (
                      <></>
                    )}
                    {/* {data?.submittedData?.ResidentialPremisesInfoSection != null ? (
                       <div className="col-lg-3 col-sm-6">
                         <label htmlFor="invoicenoInput">
                           Urinal facility availabilty
                         </label>
                         <input
                           type="text"
                           className="form-control bg-light border-0"
                           id="invoicenoInput"
                           value={
                             data?.submittedData?.ResidentialPremisesInfoSection?.urinalAvailability?.name
                           }
                           readOnly="readOnly"
                         />
                       </div>
                     ) : (
                       <></>
                     )} */}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.bathroomAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Bathroom facility availabilty
                        </label>
                         <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setBathroomAvailability(e.target.value);
                          }}
                          value={bathroomAvailability}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Available</option>
                          <option value={2}>Not Available</option>
                        </select>
                        {/* <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.ResidentialPremisesInfoSection
                              .bathroomAvailability.name
                          }
                          readOnly="readOnly"
                        /> */}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.drainsAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Drains availabilty
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setDrainAvailability(e.target.value);
                          }}
                          value={drainAvailability}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Available</option>
                          <option value={2}>Not Available</option>
                        </select>
                        {/* <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.drainsAvailability?.name
                                 }
                                 readOnly="readOnly"
                               /> */}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.approvedHandwashingFacilityAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Handwashing facility availabilty
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setHandWashingAvailability(e.target.value);
                          }}
                          value={handWashingAvailability}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Available</option>
                          <option value={2}>Not Available</option>
                        </select>
                        {/* <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.approvedHandwashingFacilityAvailability
                                     ?.name
                                 }
                                 readOnly="readOnly"
                               /> */}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.householdNumber != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of household
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoicenoInput"
                          value={householdNumber}
                          onChange={(e) => setHouseHoldNumber(e.target.value)}
                          //  value={
                          //    data?.submittedData?.ResidentialPremisesInfoSection
                          //      ?.householdNumber
                          //  }
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.maleOccupantNumber != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of male occupants
                        </label>
                        <input
                           type="text"
                           className="form-control"
                          id="invoicenoInput"
                          value={maleNumber}
                          onChange={(e) => setMaleNumber(e.target.value)}
                          //  value={
                          //    data?.submittedData?.ResidentialPremisesInfoSection
                          //      ?.maleOccupantNumber
                          //  }
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.femaleOccupantNumber != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of female occupants
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="invoicenoInput"
                          value={femaleNumber}
                          onChange={(e) => setFemaleNumber(e.target.value)}
                          //  value={
                          //    data?.submittedData?.ResidentialPremisesInfoSection
                          //      ?.femaleOccupantNumber
                          //  }
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.animalAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Animal availabilty
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setAnimalAvailability(e.target.value);
                          }}
                          value={animalAvailability}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Yes</option>
                          <option value={2}>No</option>
                        </select>

                        
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.animalNumber != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animal number</label>
                        <input
                           type="text"
                           className="form-control"
                          id="invoicenoInput"
                          value={animalNumber}
                          onChange={(e) => setAnimalNumber(e.target.value)}
                          //  value={
                          //    data?.submittedData?.ResidentialPremisesInfoSection
                          //      ?.animalNumber
                          //  }
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.PremisesAnimal?.length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animals</label>
                        {data?.submittedData?.ResidentialPremisesInfoSection?.PremisesAnimal.map(
                          (x) => (
                            <select
                              className="form-control"
                              aria-label="Default select example"
                              onChange={(e) => {
                                setAnimal(e.target.value);
                              }}
                              value={animal}
                            >
                              <option value="" selected>
                                Select
                              </option>
                              <option value={1}>Dog</option>
                              <option value={2}>Cat</option>
                              <option value={3}>Sheep</option>
                              <option value={4}>Goat</option>
                              <option value={5}>Fowl</option>
                              <option value={6}>Cattle</option>
                              <option value={7}>Pig</option>
                              <option value={8}>Rabbit</option>
                              <option value={9}>Rat</option>
                              <option value={10}>Grasscutter</option>
                              <option value={11}>Other</option>
                            </select>
                            //  <input
                            //    key={x.id}
                            //    type="text"
                            //    className="form-control bg-light border-0"
                            //    id="invoicenoInput"
                            //    value={x.AnimalType.name}
                            //    readOnly="readOnly"
                            //  />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.ResidentialPremisesInfoSection
                      ?.vaccinationProof != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Animal vaccination proof
                        </label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setVaccinationProof(e.target.value);
                          }}
                          value={vaccinationProof}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value={1}>Yes</option>
                          <option value={2}>No</option>
                        </select>
                        {/* <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.vaccinationProof?.name
                                 }
                                 readOnly="readOnly"
                               /> */}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {data?.submittedData?.ResidentialPremisesInfoSection
                    ?.animalSpaceCondition != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Animal space condition
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setAnimalSpaceCondition(e.target.value);
                        }}
                        value={animalSpaceCondition}
                      >
                        <option value="" selected>
                          Select
                        </option>
                        <option value={1}>Sanitary</option>
                        <option value={2}>Insanitary</option>
                      </select>
                      {/* <input
                               type="text"
                               className="form-control bg-light border-0"
                               id="invoicenoInput"
                               value={
                                 data?.submittedData?.ResidentialPremisesInfoSection
                                   ?.animalSpaceCondition.name
                               }
                               readOnly="readOnly"
                             /> */}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentialPremisesInfoEdit;
