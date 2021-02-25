function donate(donate_id) {
    const q = donate_id;
    window.location.href = 'donate'.split('?').shift() + '?q=' + q;
}