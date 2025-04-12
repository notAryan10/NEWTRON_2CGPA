const generateImage = async (prompt) => {
  const response = await fetch("https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_STABILITY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text_prompts: [{ text: prompt }],
      cfg_scale: 7,
      height: 512,
      width: 512,
      samples: 1,
      steps: 30,
    }),
  });

  const data = await response.json();

  if (data?.artifacts?.length > 0) {
    return `data:image/png;base64,${data.artifacts[0].base64}`;
  } else {
    throw new Error("Image generation failed");
  }
};

export { generateImage };

