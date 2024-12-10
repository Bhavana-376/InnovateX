// Event listener for frequency selection
document.getElementById('frequency').addEventListener('change', function () {
    const frequencyOptions = document.getElementById('frequency-options');
    frequencyOptions.innerHTML = ''; // Clear previous options

    switch (this.value) {
        case 'everyday':
            frequencyOptions.innerHTML = `
                <label for="times-per-day">How often per day?</label>
                <select id="times-per-day" required>
                    <option value="" disabled selected>Select an Option</option>
                    <option value="once-a-day">Once a Day</option>
                    <option value="twice-a-day">Twice a Day</option>
                    <option value="3-times-a-day">3 Times a Day</option>
                </select>
                <div id="times-per-day-options"></div> <!-- Will be populated with time and pill info -->
            `;
            break;

        case 'every-other-day':
            frequencyOptions.innerHTML = `
                <label for="start-date">Start Date:</label>
                <input type="date" id="start-date" required>
                <label for="time">Time:</label>
                <input type="time" id="time" required>
                <label for="pills">Amount of intake:</label>
                <input type="number" id="pills" min="1" placeholder="Intake (e.g., 1 Pill(s), 1 mL, 1 Drop(s) etc)" required>
            `;
            break;

        case 'specific-days':
            frequencyOptions.innerHTML = `
                <label>Select Days of the Week:</label>
                <div id="days-selection">
                    <label><input type="checkbox" id="monday" name="days" value="monday"> Monday</label>
                    <label><input type="checkbox" id="tuesday" name="days" value="tuesday"> Tuesday</label>
                    <label><input type="checkbox" id="wednesday" name="days" value="wednesday"> Wednesday</label>
                    <label><input type="checkbox" id="thursday" name="days" value="thursday"> Thursday</label>
                    <label><input type="checkbox" id="friday" name="days" value="friday"> Friday</label>
                    <label><input type="checkbox" id="saturday" name="days" value="saturday"> Saturday</label>
                    <label><input type="checkbox" id="sunday" name="days" value="sunday"> Sunday</label>
                </div>
                <label for="time">Time:</label>
                <input type="time" id="time" required>
                <label for="pills">Amount of intake:</label>
                <input type="number" id="pills" min="1" placeholder="Intake (e.g., 1 Pill(s), 1 mL, 1 Drop(s) etc)" required>
            `;
            break;

        case 'only-as-needed':
            frequencyOptions.innerHTML = `
                <p>You've selected "Only as needed." No regular reminders will be scheduled for this medication.</p>
            `;
            break;

        default:
            frequencyOptions.innerHTML = '';
            break;
    }
});

// Event listener for times-per-day selection
document.getElementById('frequency').addEventListener('change', function (event) {
    const timesPerDayOptions = document.getElementById('times-per-day-options');
    const frequencyValue = event.target.value;

    if (frequencyValue === 'everyday') {
        document.getElementById('times-per-day').addEventListener('change', function () {
            const timesValue = this.value;
            timesPerDayOptions.innerHTML = '';
            if (timesValue === 'once-a-day') {
                timesPerDayOptions.innerHTML = `
                    <label for="time-once">Enter Time (24 hrs format):</label>
                    <input type="time" id="time-once" required>
                    <label for="pills">Amount of intake:</label>
                    <input type="number" id="pills" min="1" placeholder="Intake (e.g., 1 Pill(s), 1 mL, 1 Drop(s) etc)" required>
                `;
            } else if (timesValue === 'twice-a-day') {
                timesPerDayOptions.innerHTML = `
                    <label for="time-morning">Time for First Dose (24 hrs format):</label>
                    <input type="time" id="time-morning" required>
                    <label for="time-evening">Time for Second Dose (24 hrs format):</label>
                    <input type="time" id="time-evening" required>
                    <label for="pills">Amount of intake:</label>
                    <input type="number" id="pills" min="1" placeholder="Intake (e.g., 1 Pill(s), 1 mL, 1 Drop(s) etc)" required>
                `;
            } else if (timesValue === '3-times-a-day') {
                timesPerDayOptions.innerHTML = `
                    <label for="time-morning">Time for First Dose (24 hrs format):</label>
                    <input type="time" id="time-morning" required>
                    <label for="time-afternoon">Time for Second Dose (24 hrs format):</label>
                    <input type="time" id="time-afternoon" required>
                    <label for="time-night">Time for Third Dose (24 hrs format):</label>
                    <input type="time" id="time-night" required>
                    <label for="pills">Amount of intake:</label>
                    <input type="number" id="pills" min="1" placeholder="Intake (e.g., 1 Pill(s), 1 mL, 1 Drop(s) etc)" required>
                `;
            } 
        });
    }
});

// Event listener for type selection
document.getElementById('type').addEventListener('change', function () {
    const typeOptions = document.getElementById('type-options');
    typeOptions.innerHTML = ''; // Clear previous options

    if (this.value === 'other') {
        typeOptions.innerHTML = `
            <label for="custom-type">Specify Type</label>
            <input type="text" id="custom-type" placeholder="Enter the type (e.g., spray, lotion, cream)" required>
        `;
    }
});
