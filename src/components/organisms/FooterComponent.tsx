export default function FooterComponent() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-2">10% Off your first order</h3>
          <p className="text-sm mb-4">Exclusive deal for new subscribers.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-black border border-white text-white placeholder-white"
            />
            <p className="text-green-500 text-sm">Thanks for subscribing</p>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="font-semibold mb-2">Titmouse</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a href="#">Studio Website</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Titmouse, Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
