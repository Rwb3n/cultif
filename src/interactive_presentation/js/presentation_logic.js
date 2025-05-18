document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const navigationButtons = document.querySelectorAll('[data-target]');
    let currentScreen = document.querySelector('.screen.active');

    function navigateTo(targetScreenId) {
        const targetScreen = document.getElementById(targetScreenId);
        if (!targetScreen || targetScreen === currentScreen) return;

        if (currentScreen) {
            if (currentScreen.id === 'screen-1-1' && targetScreenId === 'screen-1-2') {
                // Special transition for splash to first onboarding
                currentScreen.classList.add('exit-fade');
            } else {
                currentScreen.classList.add('exit-left'); // Standard exit
            }
            currentScreen.classList.remove('active');
        }
        
        // Delay adding active to allow exit animation to start
        setTimeout(() => {
            if (currentScreen && currentScreen.id !== 'screen-1-1') {
                 // Reset previous screen state after transition
                currentScreen.classList.remove('exit-left');
            } else if (currentScreen && currentScreen.id === 'screen-1-1') {
                currentScreen.classList.remove('exit-fade');
            }
            targetScreen.classList.add('active');
            currentScreen = targetScreen;
        }, 50); // Small delay to ensure classes are applied sequentially for CSS transitions
    }

    navigationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetScreenId = button.dataset.target;
            // Simulate API call for login/signup before navigating to home
            if (button.classList.contains('login-action-btn') || button.classList.contains('signup-action-btn')) {
                // Simple visual feedback for demo - spinner could be added here
                button.textContent = 'Processing...';
                setTimeout(() => {
                    navigateTo(targetScreenId);
                     // Reset button text if needed, or screen-3-1 handles it.
                }, 1000); // Simulate 1 second delay
            } else {
                navigateTo(targetScreenId);
            }
        });
    });

    // Auto-transition from Splash Screen (Screen 1.1)
    if (currentScreen && currentScreen.id === 'screen-1-1') {
        setTimeout(() => {
            navigateTo('screen-1-2');
        }, 3000); // As per storyboard: 2-3 seconds
    }
}); 