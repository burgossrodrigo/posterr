export const Posts = 
[
    {
        "postId": 0,
        "title": "Chocolate Pistachio Cheesecake",
        "repost": false,
        "repostId": undefined,
        "quote": true,
        "quoteId": 1,
        "body": "This recipe is for a reduced-fat cheesecake made with chocolate wafer cookies, pistachios, avocado, and Greek-style yogurt. The crust is made by pulsing chocolate wafer cookies, pistachios, and sugar in a food processor, and then pressing the mixture into the bottom of a springform pan. The filling is made by blending pistachios, cream cheese, avocado, yogurt, cornstarch, and sugar in a large bowl, and then adding egg whites, almond extract, and a pinch of salt. The cheesecake is then baked and cooled before being topped with a mousse made from whipping cream, powdered sugar, vanilla, and yogurt. The cheesecake is chilled for at least 4 hours before serving and garnished with additional whipped topping and pistachios.",
        "comments": [
            {
                "author": "John Doe",
                "authorId": 2,
                "content": "Nothing like a good workout to set the tone for the day. Keep up the great work! #motivation #fitnessgoals",
                'date': 1673342519
            },
            {
                "author": "Jane Smith",
                "authorId": 4,
                "content": "This is another comment on the post.",
                'date': 1673342519
            }
        ],
        "likes": [3],
        "shares": [{}],
        "quotes": [{}],
        'author': 'Tom Holland',
        "authorId": 1,
        'date': 1673342519
    },
    {
        "postId": 1,
        "title": "Example post Title",
        "repost": false,
        "repostId": undefined,
        "quote": false,
        "quoteId": undefined,
        "body": "This is the body of the example post. It can contain any text.",
        "comments": [
            {
                "author": "John Doe",
                "authorId": 2,
                "content": "Nothing like a good workout to set the tone for the day. Keep up the great work! #motivation #fitnessgoals",
                'date': 1673342519
            },
            {
                "author": "Jane Smith",
                "authorId": 4,
                "content": "This is another comment on the post.",
                'date': 1673342519
            }
        ],
        "likes": [1],
        "shares": [{}],
        "quotes": [{}],
        'author': 'Brad Pit',
        "authorId": 3,
        'date': 1673362379
    },
    {
        "postId": 1,
        "title": "Example post Title",
        "repost": true,
        "repostId": 1,
        "quote": false,
        "quoteId": undefined,
        "body": "This is the body of the example post. It can contain any text.",
        "comments": [
            {
                "author": "John Doe",
                "authorId": 2,
                "content": "Nothing like a good workout to set the tone for the day. Keep up the great work! #motivation #fitnessgoals",
                'date': 1673342519
            },
            {
                "author": "Jane Smith",
                "authorId": 4,
                "content": "This is another comment on the post.",
                'date': 1673342519
            }
        ],
        "likes": [1],
        "shares": [{}],
        "quotes": [{}],
        'author': 'Brad Pit',
        "authorId": 3,
        'date': 1673362379
    },    
]

export const Users = [
    {
        'id': 0,
        'name': "Stryder Crew",
        'email': 'Stryder@gmail.com',
        'password': '123456',
        'followers': [1, 2],
        'following': [1],
        'date': 1673321000          
    },
    {
        'id': 1,
        'name': 'Tom Holland',
        'email': 'tomholland@gmail.com',
        'password': '123456',
        'followers': [2, 3],
        'following': [2],
        'date': 1673362  
    },
    {
        'id': 2,
        'name': "John Doe",
        'email': 'johndoe@gmail.com',
        'password': '123456',
        'followers': [1, 3],
        'following': [1],
        'date': 1673330000  
    }, 
    {
        'id': 3,
        'name': "Brad Pit",
        'email': 'bradpit@gmail.com',
        'password': '123456',
        'followers': [1, 2],
        'following': [1],
        'date': 1673328000          
    },
    {
        'id': 4,
        'name': "Jane Smith",
        'email': 'jane@gmail.com',
        'password': '123456',
        'followers': [1, 2],
        'following': [1],
        'date': 1673328000          
    }
]