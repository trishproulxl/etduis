async function getCommitData(language) {
  if (!language) {
    throw new Error('No language specified');
  }

  try {
    const commitData = await ReadCommit(language);
    if (commitData) {
      return commitData;
    } else {
      throw new Error('No commit data found');
    }
  } catch (error) {
    console.error(`Error fetching commit data for ${language}: ${error.message}`);
    return null; // or handle the error as appropriate
  }
}

// Usage
(async () => {
  const language = 'JavaScript'; // Replace with the desired language
  const data = await getCommitData(language);
  if (data) {
    console.log('Commit Data:', data);
  } else {
    console.log('Failed to retrieve commit data.');
  }
})();
