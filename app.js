require('dotenv').config();  // Load environment variables from .env file

const { getHomeDesktopBanner } = require('./controller/homecontroller');
const { getHomepopupBanner } = require('./controller/homecontroller');
const { getBlog , getBlogfull } = require('./controller/blogController');
const { getgallery } = require('./controller/gallerycontroller');
const { gettestimonial } = require('./controller/homecontroller');
const { getcategories , getallproduct } = require('./controller/productcontroller');

const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS } = require('./config/config');



const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
    const banners = await getHomeDesktopBanner();
    const popupbanners = await getHomepopupBanner();
    const gallery = await getgallery();
    const testimonial = await gettestimonial();
    const blogs = await getBlog();
    const category = await getcategories();

    const seoDetails = {
        title: "home",
        metaDescription: "",
        metaImage: ""
    }
    res.render('index', {body: "", banners,popupbanners,gallery,testimonial,blogs,category, seoDetails, pathPart: ""});
});


app.get('/about', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "about",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('about', {body: "", seoDetails,category, pathPart: ""});
});


app.get('/products', async (req, res) => {
    const category = await getcategories();
    const products = await getallproduct();
    const seoDetails = {
        title: "products",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('products', {body: "", seoDetails,category,products, pathPart: ""});
});

app.get('/services', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "services",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('services', {body: "", seoDetails,category, pathPart: ""});
});

app.get('/service-enquire', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "services",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('service-enquire', {body: "", seoDetails,category, pathPart: ""});
});

app.get('/dealership', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('dealership', {body: "", seoDetails,category, pathPart: ""});
});

app.get('/gallery', async (req, res) => {
    const category = await getcategories();
    const gallery = await getgallery();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('gallery', {body: "", seoDetails,gallery,category, pathPart: ""});
});

app.get('/fullgallery', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('fullgallery', {body: "", seoDetails,category, pathPart: ""});
});

app.get('/colour-palette', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('colour-palette', {body: "", seoDetails,category, pathPart: ""});
});


app.get('/contact', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('contact', {body: "", seoDetails,CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,category, pathPart: ""});
});


app.get('/career', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('career', {body: "",seoDetails,category, pathPart: ""});
});


app.get('/blog', async (req, res) => {
    const category = await getcategories();
    const seoDetails = {
        title: "Blogs",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('blog', {body: "", seoDetails,category, pathPart: ""});
});

app.get('/blogfull', async (req, res) => {
    const blogfull = await getBlogfull();
    const category = await getcategories();
    const seoDetails = {
        title: "Blogsffull",
        metaDescription: "",
        metaImage: ""
    } 
   
    const id = req.query.id; 
    res.render('blogfull', {body: "",id,blogfull, seoDetails,category, pathPart: ""});
});


app.get('/product-details', async (req, res) => {
    const blogs = await getBlog();
    const category = await getcategories();
    const seoDetails = {
        title: "PAREEK COLOURS",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('product-details', {body: "", blogs,category, seoDetails, pathPart: ""});
});


app.get('/category-items', async (req, res) => {
    const category = await getcategories();
  
    const seoDetails = {
        title: "products",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('category-items', {body: "", seoDetails,category, pathPart: ""});
});


app.get('/product-enquire', async (req, res) => {
    const category = await getcategories();
  
    const seoDetails = {
        title: "products",
        metaDescription: "",
        metaImage: ""
    } 
   
    res.render('product-enquire', {body: "", seoDetails,category, pathPart: ""});
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });