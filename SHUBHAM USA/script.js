const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-items-group .portfolio-item'); 

/* Slidebar Toggle */ 
menuToggler.addEventListener('click', function(){
    sideBar.classList.toggle('active');
});

/* Page Navigation Functionality (Smooth Movement) */

for(let i = 0; i < navItemLinks.length; i++){
    navItemLinks[i].addEventListener('click', function(event){
        event.preventDefault(); // Crucial for smooth transitions! Stops the default jump.

        // Get the page ID from the link text (e.g., 'about', 'resume')
        const targetPageId = this.textContent.toLowerCase();

        // 1. Update active class on Navigation Links
        navItemLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // 2. Update active class on Page Sections to trigger CSS transition
        pages.forEach(page => {
            page.classList.remove('active'); 
        });

        // Find the page by ID and make it active
        const targetPage = document.getElementById(targetPageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Close the mobile sidebar after navigation
        sideBar.classList.remove('active');
    });
}

/* Portfolio Filter Functionality */

for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener('click', function(){
        // Update active class on filter buttons
        filterBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterText = this.textContent;

        portfolioItems.forEach(item => {
            // Safely get the category text
            const itemCategoryElement = item.querySelector('.item-category');
            const itemCategoryText = itemCategoryElement ? itemCategoryElement.textContent : '';

            // Logic to show/hide items
            if(filterText === 'All' || filterText === itemCategoryText){
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
}