import { FaChevronRight } from "react-icons/fa";

const CustomerComment = () => {
  const testimonials = [
    {
      name: "Fırat Kayar",
      role: "CEO, Hiscoot",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://via.placeholder.com/150", // Bu alanı kendi resim URL'inle değiştir
    },
    {
      name: "Fırat Kayar",
      role: "CEO, Hiscoot",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Fırat Kayar",
      role: "CEO, Hiscoot",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="px-4 md:px-0">
      <h2 className="w-full text-center text-[#081028] text-2xl md:text-[30px] font-medium">
        Müşterilerden Yorumlar
      </h2>
      <p className="text-center text-[#5B6172] font-medium mt-2">
        IMG BOSS ile satışlarını artış deneyimi yaşayan kullanıcıların
        deneyimlerini inceleyebilir ve deneyiminizi bizimle paylaşabilirsiniz.
      </p>
      <div className="mt-10 pb-20">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm md:text-base">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="text-[#081028] border border-[#081028] flex items-center rounded-full px-4 md:px-6 py-2 text-sm md:text-base">
            Tümünü Gör
            <FaChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerComment;
