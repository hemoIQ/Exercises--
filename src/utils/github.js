export const checkOnGithub = async (currentVersion) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/USER_NAME/GymTracker/main/package.json');
        if (!response.ok) return null;
        const pkg = await response.json();
        if (pkg.version !== currentVersion) {
            return {
                version: pkg.version,
                url: 'https://github.com/USER_NAME/GymTracker/releases/latest'
            };
        }
        return null;
    } catch (e) {
        console.error("Failed to check for updates:", e);
        return null;
    }
};
