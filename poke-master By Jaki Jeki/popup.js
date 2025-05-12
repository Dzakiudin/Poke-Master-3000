document.getElementById("pokeBtn").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const buttons = Array.from(document.querySelectorAll('div[role="button"]')).filter(btn =>
          btn.innerText.toLowerCase().includes("colek") || btn.innerText.toLowerCase().includes("poke")
        );
  
        let i = 0;
        const nextPoke = () => {
          if (i >= buttons.length) {
            alert("✅ Semua teman udah dicolet!");
            return;
          }
          buttons[i].click();
          console.log(`Colek ke-${i + 1}`);
          i++;
          setTimeout(nextPoke, 500 + Math.random() * 300);
        };
  
        nextPoke();
      }
    });
  });
  