let usernameInput = document.querySelector("#usernameInput");
let searchBtn = document.querySelector("#searchBtn");
let profileSection = document.querySelector("#profileSection");
let emptyState = document.querySelector("#emptyState");



async function searchUSer(username = "suprio-dev") {
  let response = await fetch(`https://api.github.com/users/${username}`);
  let data = await response.json();
  return data;
}






searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    let userInfo = await searchUSer(usernameInput.value.trim());
    emptyState.classList.add("hidden");
    profileSection.classList.remove("hidden");
    profileSection.innerHTML = `<div class="mb-5 flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Search Result</p>
          <h3 class="mt-2 text-xl font-bold">Developer Profile</h3>
        </div>
         <span class="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300">
          ● GitHub User
        </span>   
      </div>

      <article class="overflow-hidden rounded-3xl border border-white/10 bg-[#11111b] shadow-2xl shadow-black/20">

        <!-- Accent -->
        <div class="h-1.5 bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500"></div>

        <div class="p-6 sm:p-9">

          <!-- Profile Header -->
          <div class="flex flex-col gap-6 sm:flex-row sm:items-start">

            <div class="relative mx-auto shrink-0 sm:mx-0">
              <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 opacity-70 blur-sm"></div>
              <img id="avatar" src="${userInfo.avatar_url}" alt="GitHub profile avatar"
                   class="relative h-28 w-28 rounded-full border-4 border-[#11111b] bg-[#1b1b29] object-cover sm:h-32 sm:w-32">
              <span class="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-[#11111b] bg-emerald-400"></span>
            </div>

            <div class="min-w-0 flex-1 text-center sm:text-left">
              <div class="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <h3 id="profileName" class="break-words text-2xl font-extrabold tracking-tight sm:text-3xl">
                  ${userInfo.name || "Name not provided"}
                </h3>
                <span id="profileBadge" class="hidden rounded-full border border-blue-400/20 bg-blue-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-300">
                  Public
                </span>
              </div>

              <p id="profileUsername" class="mt-1 text-sm text-violet-400">${userInfo.login}</p>

              <p id="profileBio" class="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                ${userInfo.bio || "No bio available"}
              </p>

              <!-- Metadata -->
              <div class="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-slate-500 sm:justify-start">
                <span id="profileLocation" class="flex items-center gap-2">
                  <span>📍</span><span>${userInfo.location || "Location not specified"}</span>
                </span>


                <a id="profileWebsite" href="" target="_blank" rel="noopener noreferrer"
                   class="items-center gap-2 text-violet-400 hover:text-violet-300">
                  <span id="websiteText">
                📅
                Updated —${userInfo.updated_at}</span>
                </a>

                <span id="profileJoined" class="flex items-center gap-2">
                  <span>📅</span><span>Joined — ${userInfo.created_at}</span>
                </span>
              </div>
            </div>

            <a id="githubProfileLink" href="${userInfo.html_url}" target="_blank" rel="noopener noreferrer"
               class="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold transition hover:border-violet-400/40 hover:bg-violet-400/[0.06]">
              View Profile
              <span>↗</span>
            </a>
          </div>

          <!-- Divider -->
          <div class="my-8 border-t border-white/[0.07]"></div>

          <!-- Stats -->
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div class="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-violet-400/30">
              <div class="flex items-center justify-between">
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Repositories</p>
                <span class="text-lg text-violet-400">⌘</span>
              </div>
              <p id="repoCount" class="mt-3 text-3xl font-extrabold tracking-tight">${userInfo.public_repos}</p>
              <p class="mt-1 text-xs text-slate-600">Public projects</p>
            </div>

            <div class="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-blue-400/30">
              <div class="flex items-center justify-between">
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Followers</p>
                <span class="text-lg text-blue-400">♧</span>
              </div>
              <p id="followersCount" class="mt-3 text-3xl font-extrabold tracking-tight">${userInfo.followers}</p>
              <p class="mt-1 text-xs text-slate-600">People following</p>
            </div>

            <div class="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-fuchsia-400/30">
              <div class="flex items-center justify-between">
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">id</p>
                <span class="text-lg text-fuchsia-400">♡</span>
              </div>
              <p id="followingCount" class="mt-3 text-3xl font-extrabold tracking-tight">${userInfo.id || "id not publicly available"}</p>
              <p class="mt-1 text-xs text-slate-600">User id</p>
            </div>

          </div>

          <!-- Extra Profile Details -->
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-white/[0.06] p-4">
              <p class="text-xs text-slate-500">Account Type</p>
              <p id="accountType" class="mt-2 text-sm font-semibold text-slate-200">${userInfo.type}</p>
            </div>

            <div class="rounded-xl border border-white/[0.06] p-4">
              <p class="text-xs text-slate-500">Blog/Website</p>
              <p id="gistCount" class="mt-2 text-sm font-semibold text-slate-200">${userInfo.blog}</p>
            </div>
          </div>

        </div>
      </article>`;
  } catch (error) {
    console.log("Github Server Issue !");
  }

})


// removeBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   emptyState.classList.remove("hidden");
//   profileSection.classList.add("hidden");
//   profileSection.innerHTML = "";
// })

//   <button id="removeBtn"
//           class="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3 text-sm font-bold transition hover:bg-violet-500 active:scale-[0.98]">Clear
//           Profile</button>