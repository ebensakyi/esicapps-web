import moment from "moment";



export const handleExcelName = (formId:number) => {
    var dateString = moment().format("DD-MM-yyyy-HH-mm-ss-a");

    try {
        if (formId == 1) {
            return `RESIDENTIAL PREMISES-${dateString}.xlsx`;
        } else if (formId == 2) {
            return `EATING & DRINKING PREMISES-${dateString}.xlsx`;
        } else if (formId == 3) {
            return `HEALTH PREMISES-${dateString}.xlsx`;
        } else if (formId == 4) {
            return `HOSPITALITY PREMISES-${dateString}.xlsx`;
        } else if (formId == 5) {
            return `INSTITUTION PREMISES-${dateString}.xlsx`;
        } else if (formId == 6) {
            return `INDUSTRY PREMISES-${dateString}.xlsx`;
        } else if (formId == 7) {
            return `MARKETS & LORRY PARK PREMISES-${dateString}.xlsx`;
        } else if (formId == 8) {
            return `SANITARY FACILITY PREMISES-${dateString}.xlsx`;
        }
    } catch (error) { }
};

export const handleTitle = (formId: number): string | undefined => {
    try {
        switch (formId) {
            case 1:
                return "RESIDENTIAL PREMISES";
            case 2:
                return "EATING & DRINKING PREMISES";
            case 3:
                return "HEALTH PREMISES";
            case 4:
                return "HOSPITALITY PREMISES";
            case 5:
                return "INSTITUTION PREMISES";
            case 6:
                return "INDUSTRY PREMISES";
            case 7:
                return "MARKETS & LORRY PARK PREMISES";
            case 8:
                return "SANITARY FACILITY PREMISES";
            default:
                return undefined;
        }
    } catch (error) {
        console.error(error);
    }
};
