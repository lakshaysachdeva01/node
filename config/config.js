const API_BASE_URL = process.env.API_BASE_URL; 
const WEBSITE_UID = process.env.WEBSITE_UID;
const S3_BASE_URL = process.env.S3_BASE_URL;


const BANNER_TYPES = {
    HOME_BANNER: "HOME_BANNER",
    POPUP_BANNER: "POPUP_BANNER",
    AD_BANNER: "AD_BANNER",
  };

  const FETCH_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };


  const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS={
   name : "strings.stringOne",
   phone : "strings.stringTwo",
   email: "email",
   address:"strings.stringThree",
   remarks: "remarks",
  };

module.exports={
  API_BASE_URL,
    WEBSITE_UID,
    S3_BASE_URL,
    BANNER_TYPES,
    FETCH_METHODS,
    CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
};
