
interface Project {
    title : string,
    role : string,
    tags : string[],
    cover : string,
    url : string,
}

export const projects: Project[] = [

    {
        title : 'Elite Canadian Homestay',
        role : 'Web design + development',
        tags : ['Brochure website', 'Professional, clean design', 'Static site'],
        cover : '/img/elite-homestay-cover.webp',
        url : '/case-study/elite-homestay',
    },

    {
        title : 'Kelly Ann Creations',
        role : 'Web design + development',
        tags : ['Brochure website', 'Minimalist, modern design', 'Static site'],
        cover : '/img/kelly-ann-creations-cover.webp',
        url : '/case-study/kelly-ann-creations',
    },

    {
        title : 'Tri-city Bikes and Brews',
        role : 'Web design + development',
        tags : ['Wordpress blog', 'Custom theme', 'Modern design'],
        cover : '/img/bikes-and-brews-cover.webp',
        url : '/case-study/bikes-and-brews',
    },

    {
        title : 'Vitality Fitness',
        role : 'Web design + development',
        tags : ['Wordpress', 'Modern design', 'Custom theme'],
        cover : '/img/vitality-fitness-cover.webp',
        url : '/case-study/vitality-fitness',
    },

    {
        title : 'Megan Riley',
        role : 'Web design + development',
        tags : ['Landing Page', 'Modern, professional design', 'Static site'],
        cover : '/img/megan-riley-cover.webp',
        url : '/case-study/megan-riley',
    },
    
]