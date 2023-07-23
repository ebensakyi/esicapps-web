
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Community from "@/src/components/primary-data/Community";


async function getAction() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/action`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getAnimalType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/animal-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getCemeteryWorkers() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/cemetery-workers`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getCleaningFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/cleaning-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getCommunalContainerCondition() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/communal-container-condition`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getContainerVolume() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/container-volume`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDerattingFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/deratting-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDesiltingFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/desilting-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDisinfectionFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/disinfection-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDrainBadCondition() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/drain-bad-condition`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDrainType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/drain-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDrinkingWaterSourceType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/drinking-water-source-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getEaseYourselfWhere() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/ease-yourself-where`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getEffluentManagement() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/effluent-management`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getExcretaContainment() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/excreta-containment`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getExcretaDisposal() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/excreta-disposal`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getGreyWaterDisposal() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/grey-water-disposal`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getHazardousWasteDisposal() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/hazardous-waste-disposal`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getInspectionFormNuisances() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/inspection-form-nuisances`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getNuisance() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/nuisance`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getOwnershipType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/ownership-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getPestSign() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/pest-sign`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getPremisesService() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/premises-service`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getPremisesSubtypes() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/premises-subtypes`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getPremisesTypes() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/premises-types`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getRespondentDesignation() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/respondent-designation`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getSewerSystem() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/sewer-system`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getToiletHouseholdNumber() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/toilet-household-number`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getToiletPitPosition() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/toilet-pit-position`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getToiletType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/toilet-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUnsafeToiletCondition() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/unsafe-toilet-condition`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUnsafeWaterStorage() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/unsafe-water-storage`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUnservicedWasteDisposal() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/unserviced-waste-disposal`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWasteCollectionFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/waste-collection-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWasteCollectionType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/waste-collection-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWasteStorageReceptacle() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/waste-storage-receptacle`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWasteWaterContainment() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/waste-water-containment`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWaterFlowFrequency() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/water-flow-frequency`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWaterSourceType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/water-source-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getWaterStorageType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/water-storage-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getWaterSupplyType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/water-supply-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getWaterTreatmentType() {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/water-treatment-type`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}







export default async function page() {

    const actions = await getAction()
    const animalTypes = await getAnimalType()

    const cemeteryWorkers = await getCemeteryWorkers()
    const cleaningFrequencies = await getCleaningFrequency()
    const communalContainerConditions = await getCommunalContainerCondition()
    const containerVolumes = await getContainerVolume()
    const derattingFrequencies = await getDerattingFrequency()
    const desiltingFrequencies = await getDesiltingFrequency()
    const disinfectionFrequencies = await getDisinfectionFrequency()
    const drainBadConditions = await getDrainBadCondition()
    const drainTypes = await getDrainType()
    const drinkingWaterSourceTypes = await getDrinkingWaterSourceType()
    const easeYourselfWheres = await getEaseYourselfWhere()
    const effluentManagements = await getEffluentManagement()
    const excretaContainments = await getExcretaContainment()
    const excretaDisposals = await getExcretaDisposal()
    const greyWaterDisposals = await getGreyWaterDisposal()
    const hazardousWasteDisposals = await getHazardousWasteDisposal()
    const inspectionFormNuisances = await getInspectionFormNuisances()
    const nuisances = await getNuisance()
    const ownershipTypes = await getOwnershipType()
    const pestSigns = await getPestSign()
    const premisesServices = await getPremisesService()
    const premisesSubtypes = await getPremisesSubtypes()
    const premisesTypes = await getPremisesTypes()
    const respondentDesignations = await getRespondentDesignation()
    const sewerSystems = await getSewerSystem()
    const toiletHouseholdNumbers = await getToiletHouseholdNumber()
    const toiletPitPositions = await getToiletPitPosition()
    const toiletTypes = await getToiletType()
    const unsafeToiletConditions = await getUnsafeToiletCondition()
    const unsafeWaterStorages = await getUnsafeWaterStorage()
    const unservicedWasteDisposals = await getUnservicedWasteDisposal()
    const wasteCollectionFrequencies = await getWasteCollectionFrequency()
    const wasteCollectionTypes = await getWasteCollectionType()
    const wasteStorageReceptacles = await getWasteStorageReceptacle()
    const wasteWaterContainments = await getWasteWaterContainment()
    const waterFlowFrequencies = await getWaterFlowFrequency()
    const waaterSourceTypes = await getWaterSourceType()
    const waterStorageTypes = await getWaterStorageType()
    const waterSupplyTypes = await getWaterSupplyType()
    const waterTreatmentTypes = await getWaterTreatmentType()


    let data = { actions, animalTypes, cemeteryWorkers, cleaningFrequencies, communalContainerConditions, containerVolumes, derattingFrequencies, desiltingFrequencies, disinfectionFrequencies, drainBadConditions, drainTypes, drinkingWaterSourceTypes, easeYourselfWheres, effluentManagements, excretaContainments, excretaDisposals, greyWaterDisposals, hazardousWasteDisposals, inspectionFormNuisances, nuisances, ownershipTypes, pestSigns, premisesServices, premisesSubtypes, premisesTypes, respondentDesignations, sewerSystems, toiletHouseholdNumbers, toiletPitPositions, toiletTypes, unsafeToiletConditions, unsafeWaterStorages, unservicedWasteDisposals, wasteCollectionFrequencies, wasteCollectionTypes, wasteStorageReceptacles, wasteWaterContainments, waterFlowFrequencies, waaterSourceTypes, waterStorageTypes, waterSupplyTypes, waterTreatmentTypes }

    // console.log(data);




    return <Community data={data} />


}
