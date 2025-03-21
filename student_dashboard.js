document.addEventListener("DOMContentLoaded", function () {
    displayAttendance();
});

function displayAttendance() {
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    
    const tableBody = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];

    attendanceData.forEach(record => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = record.name;
        row.appendChild(nameCell);

        const rollNumberCell = document.createElement('td');
        rollNumberCell.textContent = record.rollNumber;
        row.appendChild(rollNumberCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = record.status;
        row.appendChild(statusCell);

        const classCell = document.createElement('td');
        classCell.textContent = record.class;
        row.appendChild(classCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = record.date || getCurrentDate();
        row.appendChild(dateCell);

        tableBody.appendChild(row);
    });
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
