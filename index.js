document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendar-grid');
    const eventForm = document.getElementById('event-form');
    const eventDateInput = document.getElementById('event-date');
    const eventNameInput = document.getElementById('event-name');

    // Function to create a calendar grid
    function createCalendar() {
        // Generate calendar days (e.g., for October 2024)
        const daysInMonth = 31; // Example: October has 31 days
        calendarGrid.innerHTML = '';

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.className = 'day';
            calendarGrid.appendChild(dayDiv);
        }
    }

    // Function to add an event
    function addEvent(date, name) {
        const dayDivs = document.querySelectorAll('#calendar-grid div');
        dayDivs.forEach(div => {
            if (div.textContent == date) {
                div.textContent = `${date}: ${name}`;
                div.style.backgroundColor = '#ffeb3b';
                div.style.color = '#000';
            }
        });
    }

    // Handle form submission
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = new Date(eventDateInput.value).getDate();
        const name = eventNameInput.value;
        if (date && name) {
            addEvent(date, name);
            eventForm.reset();
        }
    });

    // Initialize calendar
    createCalendar();
});
