const SUPABASE_URL = 'https://htfhfutjhlqktbzjbiuc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZmhmdXRqaGxxa3RiempiaXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4ODQzNDQsImV4cCI6MjA5OTQ2MDM0NH0.j9fyx9LyndY2ltnyPAdVoByNa8JIynCwtOVp5A-BycI';

async function atualizarMedicamentos() {
  // Buscar todos os pacientes
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/pacientes?select=id,nome,medicamentos`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  const pacientes = await resp.json();

  let atualizados = 0;

  for (const p of pacientes) {
    if (!p.medicamentos) continue;
    if (!p.medicamentos.includes(';')) continue;

    // Trocar ; por quebra de linha
    const novosMedicamentos = p.medicamentos.replace(/;\s*/g, '\n');

    const updateResp = await fetch(`${SUPABASE_URL}/rest/v1/pacientes?id=eq.${p.id}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ medicamentos: novosMedicamentos })
    });

    if (updateResp.ok) {
      console.log(`OK: ${p.nome}`);
      atualizados++;
    } else {
      console.log(`ERRO: ${p.nome}`);
    }
  }

  console.log(`\nTotal atualizados: ${atualizados}`);
}

atualizarMedicamentos().catch(console.error);
