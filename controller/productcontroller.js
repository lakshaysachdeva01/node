const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');


exports.getcategories = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/category/get-all-categories/${websiteID}`);
     return data || null
     
};

// exports.getcategories = async(req, res) => {  
//     const websiteID = await getWebsiteID(); 
//      const data = await fetchData(`${API_BASE_URL}/website/category/get-all-categories/${websiteID}?categories=`);
//      return data || null
     
// };




exports.getallproduct = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/product-management/get-all-products/${websiteID}`);
     
     return data || null
     
};
// exports.getCategoryProducts = async (req, res) => {
//      // Get the category ID from the URL parameter

//     const websiteID = await getWebsiteID();
//     const products = await fetchData(`${API_BASE_URL}/website-builder/website/product-management/get-all-products/${websiteID}?categories=${data-category-Id}`);

//     return res.json(products); // Send the product data as JSON response
// };
