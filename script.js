function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButton = document.getElementById('seeMore');
    const moreContent = document.getElementById('moreContent');

  
    console.log('seeMoreButton:', seeMoreButton);
    console.log('moreContent:', moreContent);

   
    seeMoreButton.addEventListener('click', function() {
        console.log('See More button clicked');
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            seeMoreButton.textContent = 'See Less';
        } else {
            moreContent.style.display = 'none';
            seeMoreButton.textContent = 'See More';
        }
    });

   
    moreContent.style.display = 'none';

    
    document.querySelectorAll('.details-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const moreDetails = button.nextElementSibling;
            if (moreDetails.style.display === "block") {
                moreDetails.style.display = "none";
                button.textContent = "View More Details";
            } else {
                moreDetails.style.display = "block";
                button.textContent = "Hide Details";
            }
        });
    });
});
