import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png'


const Contact = () => {
	return (
		<div className='px-8 mx-auto min-h-screen bg-gray-300 pb-6 '>
			<div className='flex gap-4'>

				<div className='relative bg-white rounded-xl mt-4 w-[60%] p-4'>
					<img className='h-32 mx-auto ' src={logo} alt="" />
					<p className='absolute -top-11 right-[610px] w-20 h-20 bg-black rounded-full transform rotate-45 translate-x-8 translate-y-8 opacity-50'></p>
					<p className='text-justify'>Royal Attire is your ultimate online destination for premium fashion. Blending elegance with modern trends, we offer a curated collection of royal-inspired clothing and accessories for all.At Royal Attire, we believe fashion is more than just clothing — it’s a statement. Our store brings you a handpicked range of luxurious, stylish, and comfortable apparel that lets you express your royal self with pride.</p>
				</div>
				<div className=' relative text-center text-xl mt-4 w-[50%] mx-auto flex justify-center items-center bg-white rounded-xl'>
					<div className=''>
						
						<p className='absolute top-44 left-[440px]	 w-20 h-20 bg-black rounded-full transform rotate-45 translate-x-8 translate-y-8 opacity-50'></p>
						<h1 className='text-3xl text-center'>Meet With Us</h1>
						<h1 className='text-2xl font-semibold mt-10'>DevCabin</h1>
						<p className='text-'>32/3,Banasree,Rampura,Dhaka</p>
						<a className='flex justify-center' style={{ display: "flex", alignItems: "center", gap: "8px" }} href="tel:+8801703301147"><FaPhoneAlt /> +880 1703301147</a>
						<a className='flex justify-center' style={{ display: "flex", alignItems: "center", gap: "8px" }} href="mailto:devcabin25@gmail.com"><MdEmail /> devcabin25@gmail.com</a>
						<p>9:00A.M to 5:00P.M </p>
					</div>
				</div>
			</div>
			<section className="bg-white  rounded-xl mt-4 ">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
					<p className="mt-4 mb-8 ">Here is the common Questions from our consumer.Any problem contact with us in whatsapp and email account. </p>
					<div className="space-y-4 text-start">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6  focus:outline-none ">How do I create an account?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Click the "Sign Up" button in the top right corner and follow the registration process.</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none">I forgot my password. What should I do?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none ">How do I update my profile information?</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Go to "My Account" settings and select "Edit Profile" to make changes. </p>
						</details>
					</div>
				</div>
			</section>


			<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6 bg-white rounded-md p-4">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Jhon Doe" className="w-full p-3 rounded bg-gray-200" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" placeholder='jhondoe@gmail.com' className="w-full p-3 rounded bg-gray-200 " />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded  bg-gray-200"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold text-white bg-black tracking-wide uppercase rounded">Send Message</button>
	</form>
</div>


		</div>
	);
};

export default Contact;