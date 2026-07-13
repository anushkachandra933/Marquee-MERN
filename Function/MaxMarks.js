const students = [
  {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    year: 1,
    course: 'BCA',
    phone: '9876543210',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 82 },
      { subject: 'HTML', marks: 91 },
      { subject: 'JavaScript', marks: 88 },
    ],
  },
  {
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    year: 2,
    course: 'BSc IT',
    phone: '9876543211',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 75 },
      { subject: 'HTML', marks: 89 },
      { subject: 'JavaScript', marks: 84 },
    ],
  },
  {
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    year: 3,
    course: 'B.Tech',
    phone: '9876543212',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 92 },
      { subject: 'HTML', marks: 87 },
      { subject: 'JavaScript', marks: 95 },
    ],
  },
  {
    name: 'Sneha Joshi',
    email: 'sneha.joshi@example.com',
    year: 4,
    course: 'B.E.',
    phone: '9876543213',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 85 },
      { subject: 'HTML', marks: 93 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Karan Mehta',
    email: 'karan.mehta@example.com',
    year: 3,
    course: 'B.Com',
    phone: '9876543214',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 70 },
      { subject: 'HTML', marks: 78 },
      { subject: 'JavaScript', marks: 81 },
    ],
  },
  {
    name: 'Ananya Singh',
    email: 'ananya.singh@example.com',
    year: 4,
    course: 'BBA',
    phone: '9876543215',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 95 },
      { subject: 'HTML', marks: 96 },
      { subject: 'JavaScript', marks: 94 },
    ],
  },
  {
    name: 'Rohan Desai',
    email: 'rohan.desai@example.com',
    year: 2,
    course: 'BCA',
    phone: '9876543216',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 68 },
      { subject: 'HTML', marks: 74 },
      { subject: 'JavaScript', marks: 80 },
    ],
  },
  {
    name: 'Meera Nair',
    email: 'meera.nair@example.com',
    year: 1,
    course: 'BSc CS',
    phone: '9876543217',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 88 },
      { subject: 'HTML', marks: 85 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Vikram Rao',
    email: 'vikram.rao@example.com',
    year: 4,
    course: 'MBA',
    phone: '9876543218',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 79 },
      { subject: 'HTML', marks: 82 },
      { subject: 'JavaScript', marks: 77 },
    ],
  },
  {
    name: 'Neha Kapoor',
    email: 'neha.kapoor@example.com',
    year: 2,
    course: 'B.Tech',
    phone: '9876543219',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 91 },
      { subject: 'HTML', marks: 88 },
      { subject: 'JavaScript', marks: 93 },
    ],
  },
];

let arrayOfMarks = students.map((student)=>{
   return student.examScore.reduce((acc,curr) => curr.marks+acc,0)
});

let sortedArray = arrayOfMarks.sort((a,b)=>b-a);
console.log(arrayOfMarks);
console.log(`Highest marks is ${sortedArray[0]}`);