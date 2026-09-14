window.addEventListener('DOMContentLoaded', () => {
	const replayableGifs = document.querySelectorAll('.js-replay-gif');

	replayableGifs.forEach((image) => {
		const baseSrc = image.getAttribute('src');
		const replayMs = Number(image.dataset.replayMs || 4000);

		if (!baseSrc || Number.isNaN(replayMs) || replayMs <= 0) {
			return;
		}

		window.setInterval(() => {
			if (document.hidden) {
				return;
			}

			const separator = baseSrc.includes('?') ? '&' : '?';
			image.src = `${baseSrc}${separator}replay=${Date.now()}`;
		}, replayMs);
	});
});
