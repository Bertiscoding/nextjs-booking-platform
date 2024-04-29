const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null; // to avoid errors on deployment pipeline

async function fetchProperties() { // doing it like this because its a server-side component
  try {
    // Handle if api domain is not available yet
    if (!apiDomain) {
      return [] // for deployment
    }

    const res = await fetch(`${apiDomain}/properties`) // need to include full uri, not just path because it' server-side
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // for deployment
  }
}

export { fetchProperties };
