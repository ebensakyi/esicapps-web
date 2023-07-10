import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const ResidentialPremisesInfoEdit = ({ data }) => {
  const router = useRouter();

  const query = router.query;

  
  let formId = query.inspectionFormId;
  let published = query.published;
console.log(data?.submittedData?.submitteddata?.submittedData?.ResidentialPremisesInfoSection?.PremisesAnimal.length);


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
                           {data?.submittedData?.ResidentialPremisesInfoSection?.toiletAvailability != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Toilet facility availabilty
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     .toiletAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
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
                           {data?.submittedData?.ResidentialPremisesInfoSection?.bathroomAvailability != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Bathroom facility availabilty
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     .bathroomAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
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
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.drainsAvailability?.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.submittedData?.ResidentialPremisesInfoSection
                             ?.approvedHandwashingFacilityAvailability !=
                           null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Handwashing facility availabilty
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.approvedHandwashingFacilityAvailability
                                     ?.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.submittedData?.ResidentialPremisesInfoSection?.householdNumber != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Number of household
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.householdNumber
                                 }
                                 readOnly="readOnly"
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
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.maleOccupantNumber
                                 }
                                 readOnly="readOnly"
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
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.femaleOccupantNumber
                                 }
                                 readOnly="readOnly"
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
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.animalAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.submittedData?.ResidentialPremisesInfoSection?.animalNumber !=
                           null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Animal number
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.animalNumber
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}

                           {data?.submittedData?.ResidentialPremisesInfoSection?.PremisesAnimal
                             ?.length != 0 ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">Animals</label>
                               {data?.submittedData?.ResidentialPremisesInfoSection?.PremisesAnimal.map(
                                 (x) => (
                                   <input
                                     key={x.id}
                                     type="text"
                                     className="form-control bg-light border-0"
                                     id="invoicenoInput"
                                     value={x.AnimalType.name}
                                     readOnly="readOnly"
                                   />
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
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.submittedData?.ResidentialPremisesInfoSection
                                     ?.vaccinationProof?.name
                                 }
                                 readOnly="readOnly"
                               />
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
                             <input
                               type="text"
                               className="form-control bg-light border-0"
                               id="invoicenoInput"
                               value={
                                 data?.submittedData?.ResidentialPremisesInfoSection
                                   ?.animalSpaceCondition.name
                               }
                               readOnly="readOnly"
                             />
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
