describe('re-export bug', () => {
    it('doit échouer sous Vite 6.3.3', async () => {
        await expect(import('./entry'))
            .resolves
            .not
            .toThrow(/__vite_ssr_export_default__/)
    })
})