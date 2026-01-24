document.addEventListener('DOMContentLoaded', () => {
    const specializationSelect = document.getElementById('specialization');
    const locationSelect = document.getElementById('location');
    const doctorCards = document.querySelectorAll('.doctor-card');

    function filterDoctors() {
        const selectedSpecialization = specializationSelect.value;
        const selectedLocation = locationSelect.value;

        doctorCards.forEach(card => {
            const cardSpecialization = card.dataset.specialization;
            const cardLocation = card.dataset.location;

            const specializationMatch = !selectedSpecialization || selectedSpecialization === cardSpecialization;
            const locationMatch = !selectedLocation || selectedLocation === cardLocation;

            if (specializationMatch && locationMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    specializationSelect.addEventListener('change', filterDoctors);
    locationSelect.addEventListener('change', filterDoctors);
});
