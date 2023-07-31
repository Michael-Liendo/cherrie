export async function GET() {
	const routes = await generateRoutes();

	const urlset = routes
		.map((route) => {
			return `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${new Date(__BUILD_DATE__).toISOString()}</lastmod>
          <priority>${route.priority}</priority>
        </url>
      `;
		})
		.join("\n");

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>
  `;

	return new Response(sitemap.trim(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}

async function generateRoutes() {
	const domain = "https://sarteza.com";
	// const productsSlug = await getProducts();

	const paths = [{ path: "/", priority: "1.00" }];

	const allRoutes: { url: string; priority: string }[] = [];

	// for each route
	paths.forEach((url) => {
		allRoutes.push({ url: `${domain}${url.path}`, priority: url.priority });
	});

	// notesSlugs.forEach(({ slug }) => {
	// 	allRoutes.push({ url: `${domain}/products/${slug}`, priority: '0.70' });
	// });

	return allRoutes;
}
