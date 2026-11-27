async function signIn(provider) {
    const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider, callbackURL: "/" }),
    });
    const data = await res.json();
    window.location.href = data.url;
}

document.getElementById("google").onclick = () => signIn("google");
document.getElementById("github").onclick = () => signIn("github");

document.getElementById("logout").onclick = async () => {
    await fetch("/api/auth/sign-out", { method: "POST" });
    window.location.reload();
};

fetch("/api/me")
    .then(
        async (res) =>
            `${res.status}\n${JSON.stringify(await res.json(), null, 2)}`,
    )
    .then((text) => (document.getElementById("me").textContent = text));
