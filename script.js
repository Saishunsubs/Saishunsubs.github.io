document.addEventListener('DOMContentLoaded', function() {

    // --- Data for Releases (Simulate a data source) ---
    const releasesData = [
        {
            seriesTitle: "Echoes of Tomorrow",
            episodeNumber: 3,
            episodeTitle: "The Shifting Sands",
            releaseDate: "October 24, 2023",
            downloads: [
                { label: "1080p (DDL)", url: "#download-link-1080p-eot-3" },
                { label: "720p (DDL)", url: "#download-link-720p-eot-3" },
                { label: "Torrent", url: "#torrent-link-eot-3" }
            ],
            notes: "Minor timing adjustments from v1."
        },
        {
            seriesTitle: "Cybernetic Heartbeat",
            episodeNumber: 7,
            episodeTitle: "Digital Ghost",
            releaseDate: "October 20, 2023",
            downloads: [
                { label: "1080p (DDL)", url: "#download-link-1080p-ch-7" },
                { label: "Torrent", url: "#torrent-link-ch-7" }
            ]
        },
        {
            seriesTitle: "Echoes of Tomorrow",
            episodeNumber: 2,
            episodeTitle: "Whispers in the Code",
            releaseDate: "October 17, 2023",
            downloads: [
                { label: "1080p (DDL)", url: "#download-link-1080p-eot-2" },
                { label: "720p (DDL)", url: "#download-link-720p-eot-2" },
                { label: "Torrent", url: "#torrent-link-eot-2" }
            ],
            notes: "Initial release."
        }
    ];

    // --- Data for Series (Simulate a data source) ---
    const seriesData = [
        {
            title: "Echoes of Tomorrow",
            status: "Ongoing",
            synopsis: "In a future where technology and humanity blur, a group of rebels fights to preserve what it means to be human. Each episode unveils new mysteries and challenges.",
            coverImage: "https://via.placeholder.com/120x180.png?text=EoT+Cover" // Placeholder image
        },
        {
            title: "Cybernetic Heartbeat",
            status: "Ongoing",
            synopsis: "A romance drama set in a high-tech city. Can love blossom between a human and an advanced AI? This series explores themes of identity and emotion.",
            coverImage: "https://via.placeholder.com/120x180.png?text=CH+Cover" // Placeholder image
        },
        {
            title: "Chronicles of Eldoria",
            status: "Completed",
            synopsis: "A classic fantasy adventure following a young hero's journey to save the kingdom of Eldoria from an ancient evil. All 24 episodes subbed!",
            coverImage: "https://via.placeholder.com/120x180.png?text=CoE+Cover" // Placeholder image
        },
        {
            title: "Galactic Patrol Alpha",
            status: "Planned",
            synopsis: "Get ready for an action-packed space opera! The elite Galactic Patrol Alpha team defends the universe from cosmic threats. Coming Soon!",
            coverImage: "https://via.placeholder.com/120x180.png?text=GPA+Cover" // Placeholder image
        }
    ];

    // --- Populate Releases ---
    const releaseListContainer = document.getElementById('release-list');
    if (releaseListContainer) {
        releaseListContainer.innerHTML = ''; // Clear loading message
        if (releasesData.length === 0) {
            releaseListContainer.innerHTML = '<p>No releases yet. Check back soon!</p>';
        } else {
            releasesData.forEach(release => {
                const releaseElement = document.createElement('article');
                releaseElement.classList.add('release-item');

                let downloadLinksHTML = '';
                release.downloads.forEach(link => {
                    downloadLinksHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
                });

                releaseElement.innerHTML = `
                    <h3>${release.seriesTitle} - Episode ${release.episodeNumber}${release.episodeTitle ? `: ${release.episodeTitle}` : ''}</h3>
                    <p class="release-date">Released: ${release.releaseDate}</p>
                    ${release.notes ? `<p class="release-notes">Notes: ${release.notes}</p>` : ''}
                    <div class="download-links">
                        ${downloadLinksHTML}
                    </div>
                `;
                releaseListContainer.appendChild(releaseElement);
            });
        }
    }

    // --- Populate Series ---
    const seriesListContainer = document.getElementById('series-list');
    if (seriesListContainer) {
        seriesListContainer.innerHTML = ''; // Clear loading message
        if (seriesData.length === 0) {
            seriesListContainer.innerHTML = '<p>No series information available yet.</p>';
        } else {
            seriesData.forEach(series => {
                const seriesElement = document.createElement('article');
                seriesElement.classList.add('series-item');

                seriesElement.innerHTML = `
                    ${series.coverImage ? `<img src="${series.coverImage}" alt="${series.title} Cover Art">` : ''}
                    <div class="series-info">
                        <h3>${series.title}</h3>
                        <p class="series-status">Status: ${series.status}</p>
                        <p class="series-synopsis">${series.synopsis}</p>
                    </div>
                `;
                seriesListContainer.appendChild(seriesElement);
            });
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});