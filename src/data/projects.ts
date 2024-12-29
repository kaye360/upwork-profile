
interface Project {
    title : string,
    role : string,
    tags : string[],
    cover : string,
    url : string,
}

export const projects: Project[] = [

    {
        title : 'Tri-city Bikes and Brews',
        role : 'Web design + development',
        tags : ['Wordpress blog', 'Custom theme', 'Modern'],
        cover : '/img/bikes-and-brews-cover.webp',
        url : '/case-study/bikes-and-brews-homestay'
    },

    {
        title : 'Elite Canadian Homestay',
        role : 'Web design + development',
        tags : ['Brochure website', 'Professional', 'Clean'],
        cover : '/img/elite-homestay-cover.webp',
        url : '/case-study/elite-canadian-homestay'
    },

    {
        title : 'Kelly Ann Creations',
        role : 'Web design + development',
        tags : ['Brochure website', 'Minimalist', 'Modern'],
        cover : '/img/kelly-ann-creations-cover.webp',
        url : '/case-study/kelly-ann-creations'
    },

    {
        title : 'Vitality Fitness',
        role : 'Web design + development',
        tags : ['Wordpress', 'Modern', 'Custom theme'],
        cover : '/img/vitality-fitness-cover.webp',
        url : '/case-study/vitality-fitness'
    },

    {
        title : 'Megan Riley',
        role : 'Web design + development',
        tags : ['Landing Page', 'Modern', 'Professional'],
        cover : '/img/megan-riley-cover.webp',
        url : '/case-study/megan-riley'
    },
    
]