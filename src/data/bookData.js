const categories = [
  {
    category: "India's Top Read",
    books: [
      {
        id: '1',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '2',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '3',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true,
        language: 'Japanese',
        binding: 'Hardcover'
      },
      {
        id: '4',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '5',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true,
        language: 'French',
        binding: 'Library'
      },
      {
        id: '6',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '7',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 205",
        originalPrice: "₹ 250",
        discount: "25% OFF",
        isUsed: true,
        language: 'German',
        binding: 'Paperback'
      },
      {
        id: '8',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '9',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '10',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      }
    ]
  },
  {
    category: "Book Sets",
    books: [
      {
        id: '11',
        src: require('../assets/images/gopi_diaries_boxset.jpg'),
        title: "GOPI DIARIES BOXSET",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '12',
        src: require('../assets/images/lost_symbol_girl_on_the_train.jpg'),
        title: "The Lost Symbol/The Girl On The Train-Hardcover",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '13',
        src: require('../assets/images/lil_legends_writing_practice.jpg'),
        title: "Lil Legends Writing Practice Boxset (Set Of 2 Books) Number Tracing & Activity Book Uppercase Tracing & Vocabulary Book For Kids, Level-1 | 2 To 5 Year Old",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '14',
        src: require('../assets/images/ncert_cbse.jpg'),
        title: "NCERT & CBSE One For All Workbook For Class 8 | Mathematics | Science | Social Science | English | Updated As Per NCF | MCQ's | VSA | SA | LA | Set Of 4 Books | For Latest Exam",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '15',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '16',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '17',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '18',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '19',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '20',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      }
    ]
  },
  {
    category: "Fiction",
    books: [
      {
        id: '21',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '22',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '23',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '24',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '25',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '26',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '27',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '28',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '29',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '30',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      }
    ]
  },
  {
    category: "Tik-Tok",
    books: [
      {
        id: '31',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '32',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '33',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '34',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '35',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '36',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '37',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '38',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '39',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '40',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      }
    ]
  },
  {
    category: "Thrillers",
    books: [
      {
        id: '41',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '42',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '43',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '44',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '45',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '46',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '47',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '48',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '49',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      },
      {
        id: '50',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false,
        language: 'English',
        binding: 'Paperback'
      }
    ]
  }
];

export default categories;
