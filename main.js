const projects = [
    {
        title: "Autonomous Agent Swarm",
        description: "A multi-agent system capable of collaborative task solving, research, and coding. Built with GPT-4o and custom orchestration layers.",
        tags: ["LLMs", "Python", "LangChain"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Neural Vision Analyzer",
        description: "Real-time computer vision system for object detection and behavioral analysis in industrial environments.",
        tags: ["PyTorch", "Computer Vision", "React"],
        image: "https://images.unsplash.com/photo-1555255707-c07966488bc0?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Generative Design Engine",
        description: "An AI tool that creates stunning UI/UX layouts based on text prompts, optimizing for accessibility and performance.",
        tags: ["Stable Diffusion", "JavaScript", "Design"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Predictive Analytics Suite",
        description: "Enterprise-grade forecasting platform using transformer-based time series models for market analysis.",
        tags: ["Machine Learning", "FastAPI", "Transformers"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
];

const skills = [
    "Large Language Models", "Prompt Engineering", "RAG Systems", 
    "PyTorch / TensorFlow", "Vector Databases", "Agentic Workflows",
    "Computer Vision", "Natural Language Processing", "Cloud Architecture"
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <div class="project-img">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(s => `
        <div class="skill-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-color)"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            ${s}
        </div>
    `).join('');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();

    // Add animation classes to cards
    document.querySelectorAll('.project-card, .skill-badge').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
