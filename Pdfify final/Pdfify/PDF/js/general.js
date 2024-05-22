function showHeaderMenu() {
    document.querySelector('.mobile-design-menu-popup').style.display = 'block';
}

function closeHeaderMenu() {
    document.querySelector('.mobile-design-menu-popup').style.display = 'none';
}

let tstnum = 1;
let tstnextnum = 2;
let tst = `testimonials-${tstnum}`;
let tstnext = `testimonials-${tstnextnum}`;

function testimonialsScrollRight() {

    if (tstnextnum == 5) {
        document.getElementById(tst).style.order = '2';
        document.getElementById(tst).classList.remove('animateTestimonials');
        document.getElementById('testimonials-1').style.order = '1';
        document.getElementById('testimonials-1').classList.add('animateTestimonials');

        tstnum = 1;
        tstnextnum = 2;
        tst = `testimonials-${tstnum}`;
        tstnext = `testimonials-${tstnextnum}`;

    } else {
        document.getElementById(tst).style.order = '2';
        document.getElementById(tst).classList.remove('animateTestimonials');
        document.getElementById(tstnext).style.order = '1';
        document.getElementById(tstnext).classList.add('animateTestimonials');
        tst = `testimonials-${++tstnum}`;
        tstnext = `testimonials-${++tstnextnum}`;
    }
}

function testimonialsScrollLeft() {

    if (tstnum == 1) {
        document.getElementById('testimonials-1').style.order = '2';
        document.getElementById('testimonials-1').classList.remove('animateTestimonials');
        document.getElementById('testimonials-4').style.order = '1';
        document.getElementById('testimonials-4').classList.add('animateTestimonials');

        tstnum = 4;
        tstnextnum = 5;
        tst = `testimonials-${tstnum}`;
        tstnext = `testimonials-${tstnextnum}`;

    } else {
        document.getElementById(tst).style.order = '2';
        document.getElementById(tst).classList.remove('animateTestimonials');
        document.getElementById(`testimonials-${tst-1}`).style.order = '1';
        document.getElementById(`testimonials-${tst-1}`).classList.add('animateTestimonials');
        tst = `testimonials-${--tstnum}`;
        tstnext = `testimonials-${--tstnextnum}`;
    }
}