const priceToggleCheckbox = document.getElementById('price-toggle-checkbox');
let isMonthly = true;

// Функция для обновления отображаемых цен
function updatePrices() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        price.textContent = isMonthly ? `$${price.dataset.monthly} / Monthly` : `$${price.dataset.yearly} / Annually`;
    });
}

// Загрузка состояния переключателя из localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('priceToggleState');
    if (savedState) {
        isMonthly = savedState === 'true';
        priceToggleCheckbox.checked = !isMonthly;
        updatePrices();
    }
});

// Сохранение состояния переключателя в localStorage и обновление цен при изменении
priceToggleCheckbox.addEventListener('change', () => {
    isMonthly = !priceToggleCheckbox.checked;
    localStorage.setItem('priceToggleState', isMonthly);
    updatePrices();
});

// Инициализация отображения цен
updatePrices();

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        const tab = document.querySelector(`button[data-bs-target="${hash}"]`);
        if (tab) {
            const bsTab = new bootstrap.Tab(tab);
            bsTab.show();
        }
    }
});

$(document).ready(function() {
    // Check URL hash and activate corresponding tab, or default to the first tab
    var hash = window.location.hash;
    if (hash) {
        $('a[href="' + hash + '"]').tab('show');
    } else {
        $('#tab-1-tab').tab('show');
    }

    // Update URL hash when tab is shown
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var newHash = $(e.target).attr('href');
        history.pushState(null, null, newHash);
    });
});