export async function logger(action, details) {
  try {
    console.log(
      `Attempting to log action "${action}" to http://localhost:3005/api/log`
    );
    console.log("Request payload:", JSON.stringify({ action, details }));
    const res = await fetch("http://localhost:3005/api/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, details }),
    });

    if (!res.ok) {
      console.error(
        `Logger response failed for action "${action}":`,
        await res.text()
      );
      return { success: false, error: await res.text() };
    }

    console.log(`Successfully logged action "${action}"`);
    return { success: true };
  } catch (e) {
    console.error(`Logger failed for action "${action}":`, e);
    console.error("Error details:", e.message);
    return { success: false, error: e.message };
  }
}
