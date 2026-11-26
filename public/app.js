async function signIn(provider) {
    const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({provider, callbackURL: "/"}),
    });
    const data = await res.json();
    window.location.href = data.url;
}

document.getElementById("google").onclick = () => signIn("google");
document.getElementById("github").onclick = () => signIn("github");

fetch("/api/auth/get-session")
    .then((res) => res.json())
    .then((data) => (document.getElementById("session").textContent = JSON.stringify(data, null, 2)));