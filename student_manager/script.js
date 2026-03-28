const students = [
    { name: "Arpitha", marks: [85, 90, 78, 92, 88] },
    { name: "Rahul", marks: [70, 65, 80, 75, 72] },
    { name: "Sneha", marks: [95, 88, 91, 94, 90] },
    { name: "Vijay", marks: [60, 55, 62, 58, 65] }
];


function calculateAverage(marksArray) {
    let sum = 0;
    for (let i = 0; i < marksArray.length; i++) {
        sum += marksArray[i];
    }
    return sum / marksArray.length;
}

console.log("--- Student Grade Report ---");

students.forEach(student => {
    let avg = calculateAverage(student.marks);
    
    // Determine Pass/Fail (Threshold: 60)
    let status = avg >= 60 ? "PASS" : "FAIL";
    
    console.log(`Student: ${student.name}`);
    console.log(`Average Mark: ${avg.toFixed(2)}`);
    console.log(`Status: ${status}`);
    console.log("---------------------------");
});