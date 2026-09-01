/* Progress Tracking Logic (LocalStorage based) */
const ProgressTracker = (function() {
  const PROGRESS_KEY = 'frontend_hub_progress';
  
  const TOTAL_TOPICS = {
    html: 15,
    css: 20,
    javascript: 25,
    tailwind: 24
  };

  function getSavedProgress() {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      return data ? JSON.parse(data) : {};
    } catch(e) {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch(e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }

  function isCompleted(topicId) {
    const progress = getSavedProgress();
    return !!progress[topicId];
  }

  function toggleCompletion(topicId, category) {
    const progress = getSavedProgress();
    if (progress[topicId]) {
      delete progress[topicId];
    } else {
      progress[topicId] = {
        category: category,
        completedAt: new Date().toISOString()
      };
    }
    saveProgress(progress);
    updateUI();
    return !!progress[topicId];
  }

  function getCategoryStats(category) {
    const progress = getSavedProgress();
    let completedCount = 0;
    Object.keys(progress).forEach(id => {
      if (progress[id] && progress[id].category === category) {
        completedCount++;
      }
    });
    const total = TOTAL_TOPICS[category] || 15;
    return {
      completed: completedCount,
      total: total,
      percentage: Math.round((completedCount / total) * 100)
    };
  }

  function getOverallStats() {
    const categories = ['html', 'css', 'javascript', 'tailwind'];
    let totalCompleted = 0;
    let totalAll = 0;

    categories.forEach(cat => {
      const stats = getCategoryStats(cat);
      totalCompleted += stats.completed;
      totalAll += stats.total;
    });

    return {
      completed: totalCompleted,
      total: totalAll,
      percentage: Math.round((totalCompleted / totalAll) * 100)
    };
  }

  function updateUI() {
    // Update individual completion buttons
    document.querySelectorAll('[data-topic-id]').forEach(btn => {
      const topicId = btn.getAttribute('data-topic-id');
      if (isCompleted(topicId)) {
        btn.classList.add('completed');
        btn.innerHTML = `✓ Completed`;
        
        // Update sidebar link status
        const sidebarLink = document.querySelector(`.sidebar-link[href="#${topicId}"]`);
        if (sidebarLink) {
          sidebarLink.classList.add('completed');
        }
      } else {
        btn.classList.remove('completed');
        btn.innerHTML = `Mark as Completed`;
        
        const sidebarLink = document.querySelector(`.sidebar-link[href="#${topicId}"]`);
        if (sidebarLink) {
          sidebarLink.classList.remove('completed');
        }
      }
    });

    // Update Home Dashboard counters if present
    ['html', 'css', 'javascript', 'tailwind'].forEach(cat => {
      const stats = getCategoryStats(cat);
      const countEl = document.getElementById(`${cat}ProgressCount`);
      const barEl = document.getElementById(`${cat}ProgressBar`);
      if (countEl) countEl.innerText = `${stats.completed}/${stats.total} Completed`;
      if (barEl) barEl.style.width = `${stats.percentage}%`;
    });

    // Update Overall Stats
    const overall = getOverallStats();
    const overallCountEl = document.getElementById('overallProgressCount');
    const overallBarEl = document.getElementById('overallProgressBar');
    if (overallCountEl) overallCountEl.innerText = `${overall.completed}/${overall.total} Topics Completed (${overall.percentage}%)`;
    if (overallBarEl) overallBarEl.style.width = `${overall.percentage}%`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateUI();

    // Event Delegation for topic completion buttons
    document.body.addEventListener('click', (e) => {
      const target = e.target.closest('[data-topic-id]');
      if (target) {
        const topicId = target.getAttribute('data-topic-id');
        const category = target.getAttribute('data-category');
        toggleCompletion(topicId, category);
      }
    });
  });

  return {
    isCompleted,
    toggleCompletion,
    getCategoryStats,
    getOverallStats,
    updateUI
  };
})();
