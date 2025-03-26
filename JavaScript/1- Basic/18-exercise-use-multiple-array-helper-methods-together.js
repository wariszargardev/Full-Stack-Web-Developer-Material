const posts = [
    {
        id: 1,
        title: 'JavaScript Basics',
        body: 'Learning the fundamentals of JavaScript',
        author: 'Sarah',
        userId: 1,
        langs: ['EN', 'ES', 'FR', 'DE', 'IT', 'RU', 'CN']
    },
    {
        id: 2,
        title: 'React Components',
        body: 'Building reusable React components',
        author: 'Sarah',
        userId: 1,
        langs: ['EN', 'FR', 'ES', 'DE', 'IT', 'RU', 'CN']
    },
    {
        id: 3,
        title: 'Node.js Setup',
        body: 'Getting started with Node.js',
        author: 'John',
        userId: 2,
        langs: ['EN', 'DE', 'ES', 'FR', 'IT', 'RU', 'CN']
    },
    {
        id: 4,
        title: 'Express Routes',
        body: 'Creating API routes in Express',
        author: 'John',
        userId: 2,
        langs: ['EN', 'IT', 'ES', 'FR', 'DE', 'RU', 'CN']
    },
    {
        id: 5,
        title: 'MongoDB Basics',
        body: 'Introduction to MongoDB',
        author: 'John',
        userId: 2,
        langs: ['EN', 'IT', 'ES', 'FR', 'DE', 'RU', 'CN']
    },
    {
        id: 6,
        title: 'CSS Grid Layout',
        body: 'Modern CSS grid techniques',
        author: 'Emma',
        userId: 3,
        langs: ['EN', 'ES', 'FR', 'DE', 'IT', 'RU', 'CN']
    },
    {
        id: 7,
        title: 'Flexbox Tutorial',
        body: 'Mastering CSS Flexbox',
        author: 'Emma',
        userId: 3,
        langs: ['EN', 'DE', 'ES', 'FR', 'IT', 'RU', 'CN']
    },
    {
        id: 8,
        title: 'TypeScript Types',
        body: 'Understanding TypeScript basics',
        author: 'Mike',
        userId: 4,
        langs: ['EN', 'RU', 'ES', 'FR', 'DE', 'IT', 'CN']
    },
    {
        id: 9,
        title: 'Advanced TypeScript',
        body: 'Advanced types and interfaces',
        author: 'Mike',
        userId: 4,
        langs: ['EN', 'RU', 'ES', 'FR', 'DE', 'IT', 'CN']
    },
    {
        id: 10,
        title: 'Testing with Jest',
        body: 'Unit testing JavaScript code',
        author: 'Mike',
        userId: 4,
        langs: ['EN', 'RU', 'ES', 'FR', 'DE', 'IT', 'CN']
    }
]

// First we can filter the posts by author
const johnPosts = posts.filter ((post) => post.author === 'John')
console.table(johnPosts)

// Then we can map the posts to get the langs
const johnAllLanguage = johnPosts.map((post) => post.langs)
console.table(johnAllLanguage)

// Then we can reduce the langs to a single array
const singleFlatArray = johnAllLanguage.reduce ((acc, value) => {
    return acc.concat(value)
}, [])

console.log(singleFlatArray)

// Then we can create a new Set of the langs
const uniqueLang = new Set(singleFlatArray)
console.table(uniqueLang)
const uniqueLangArray = Array.from(new Set(singleFlatArray))
console.log(uniqueLangArray)

const uniqueLangArrayAnother = [...new Set(singleFlatArray)]
console.log(uniqueLangArrayAnother)

// In single chaining we can do this 
const jhonAllLanguageResult = [... new Set(
    posts.filter ((post) => post.author === 'John')
            .map((post) => post.langs)
            .reduce ((acc, value) => acc.concat(value))
    )   
    
];   
console.table(jhonAllLanguageResult)
