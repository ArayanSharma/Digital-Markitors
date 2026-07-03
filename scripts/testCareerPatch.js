(async () => {
  try {
    const listRes = await fetch('http://localhost:5000/api/career');
    console.log('GET /api/career status', listRes.status);
    const listJson = await listRes.json();
    if (!Array.isArray(listJson.careers) || listJson.careers.length === 0) {
      console.log('No careers returned from server');
      return;
    }
    const id = listJson.careers[0]._id;
    console.log('Patching id', id);
    const patchRes = await fetch(`http://localhost:5000/api/career/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Automated Patch Test ' + Date.now() }),
    });
    console.log('PATCH status', patchRes.status);
    const body = await patchRes.text();
    console.log('PATCH body:', body);
  } catch (err) {
    console.error('Request error:', err);
  }
})();
