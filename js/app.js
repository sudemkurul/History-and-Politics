function showSection(sectionId) {
    // Tüm bölümleri gizle
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    // İlgili bölümü göster
    document.getElementById(sectionId).style.display = 'block';
    // Tüm butonların aktifliğini kaldır
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    // Aktif butonu işaretle
    let btnList = document.querySelectorAll('.sidebar-btn');
    let ids = ['tarih','siyaset','hukuk','gundem','sertifika','kitap'];
    for(let i=0;i<ids.length;i++) {
        if(ids[i]===sectionId) btnList[i].classList.add('active');
    }
}

// Sayfa yüklenince ilk "Tarih" bölümü açık olsun
document.addEventListener('DOMContentLoaded', function() {
    showSection('tarih');
});
