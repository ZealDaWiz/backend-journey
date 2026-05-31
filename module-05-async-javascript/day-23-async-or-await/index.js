async function processOrder(name) {
    try {
        const medicine = await findMedicine(name);
        const checked = await checkStock(medicine);
        await generateReceipt(checked);
    } catch(error) {
         console.log(error.message);
    }
}
