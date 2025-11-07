// redirect.js

(function() {
    // الدومين المسموح به
    const ALLOWED_DOMAIN = 'brawstars.art';

    // الدومين الحالي
    const currentHost = window.location.hostname.toLowerCase();

    // إذا لم يكن الدومين هو ALLOWED_DOMAIN، حوّل المستخدم
    if (currentHost !== ALLOWED_DOMAIN && currentHost !== 'www.' + ALLOWED_DOMAIN) {
        // بناء رابط التحويل مع الاحتفاظ بالمسار والاستعلام والهاش
        const target = 'https://' + ALLOWED_DOMAIN + window.location.pathname + window.location.search + window.location.hash;
        window.location.replace(target);
    }
})();
