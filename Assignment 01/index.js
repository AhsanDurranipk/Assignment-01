// Ensure the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    var skillsSection = document.getElementById('skills');
    // Initialize the skills section visibility
    skillsSection.style.display = skillsSection.style.display || 'none'; // Set initial state to 'none' if not set
    toggleSkillsButton.addEventListener('click', function () {
        // Toggle the display state of skills section
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
