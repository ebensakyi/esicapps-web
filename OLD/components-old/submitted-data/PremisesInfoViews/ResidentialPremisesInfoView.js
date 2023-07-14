import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const ResidentialPremisesInfoView = ({ data }) => {
  const router = useRouter();

  console.log("ResidentialPremisesInfoView: ",data);
  const query = router.query;

  
  let formId = query.inspectionFormId;
  let published = query.published;


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
                           {data?.ResidentialPremisesInfoSection?.toiletAvailability != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Toilet facility availabilty
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.ResidentialPremisesInfoSection
                                     .toiletAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {/* {data?.ResidentialPremisesInfoSection != null ? (
                       <div className="col-lg-3 col-sm-6">
                         <label htmlFor="invoicenoInput">
                           Urinal facility availabilty
                         </label>
                         <input
                           type="text"
                           className="form-control bg-light border-0"
                           id="invoicenoInput"
                           value={
                             data?.ResidentialPremisesInfoSection?.urinalAvailability?.name
                           }
                           readOnly="readOnly"
                         />
                       </div>
                     ) : (
                       <></>
                     )} */}
                           {data?.ResidentialPremisesInfoSection?.bathroomAvailability != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Bathroom facility availabilty
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.ResidentialPremisesInfoSection
                                     .bathroomAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.drainsAvailability?.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.approvedHandwashingFacilityAvailability
                                     ?.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection?.householdNumber != null ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">
                                 Number of household
                               </label>
                               <input
                                 type="text"
                                 className="form-control bg-light border-0"
                                 id="invoicenoInput"
                                 value={
                                   data?.ResidentialPremisesInfoSection
                                     ?.householdNumber
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.maleOccupantNumber
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.femaleOccupantNumber
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.animalAvailability.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                           {data?.ResidentialPremisesInfoSection?.animalNumber !=
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.animalNumber
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}

                           {data?.ResidentialPremisesInfoSection?.PremisesAnimal
                             ?.length != 0 ? (
                             <div className="col-lg-3 col-sm-6">
                               <label htmlFor="invoicenoInput">Animals</label>
                               {data?.ResidentialPremisesInfoSection?.PremisesAnimal.map(
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

                           {data?.ResidentialPremisesInfoSection
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
                                   data?.ResidentialPremisesInfoSection
                                     ?.vaccinationProof?.name
                                 }
                                 readOnly="readOnly"
                               />
                             </div>
                           ) : (
                             <></>
                           )}
                         </div>
                         {data?.ResidentialPremisesInfoSection
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
                                 data?.ResidentialPremisesInfoSection
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

export default ResidentialPremisesInfoView;
