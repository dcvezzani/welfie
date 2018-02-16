
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries

      return knex('messages').insert([{"id":1,"user_id":1,"name":"Mr. Cecilia Little","email":"rylee@pouros.info","phone":"433-430-0712 x013","sponsoring_entity":"Yost-Wunsch","content":"Impedit itaque fugit dolores officiis deserunt mollitia. Et facilis et pariatur dolores praesentium distinctio soluta. Corporis asperiores ratione tempore non aut esse."},{"id":2,"user_id":1,"name":"Yesenia Auer","email":"paxton.quigley@larson.net","phone":"1-503-584-1869 x6203","sponsoring_entity":"Miller-Cassin","content":"Sapiente ea quo molestiae in labore ratione asperiores. Quis ipsum id voluptates officiis autem. Blanditiis et sint natus."},{"id":3,"user_id":1,"name":"Elda Bins","email":"maximo.orn@schultzhilpert.net","phone":"730-875-9705 x4892","sponsoring_entity":"Carter, Borer and Pagac","content":"Rerum explicabo minima non reprehenderit. Ratione velit at consequatur aut tenetur quaerat. Tempore nostrum dolor sapiente ratione consequuntur blanditiis nobis. Corrupti a ratione. Est molestiae alias dolores."},{"id":4,"user_id":1,"name":"Jennings Stokes","email":"carlie.toy@collins.biz","phone":"542-294-0676 x4685","sponsoring_entity":"Block-Von","content":"Est in voluptate enim vero. Voluptatibus beatae ea neque harum voluptatem fugiat dolore. Autem quam optio asperiores quod. Ut in similique enim amet ipsum natus ab. Nobis animi voluptas fugit quia ad nihil eius."},{"id":5,"user_id":1,"name":"Ms. Walter Vandervort","email":"grace_brown@schummmann.io","phone":"689.589.1711 x1906","sponsoring_entity":"Homenick and Sons","content":"Perferendis quia sequi aut. Quasi quibusdam officiis et veritatis culpa laborum. Adipisci qui ut. Distinctio officiis dolores consequatur ex quasi ut quaerat."},{"id":6,"user_id":1,"name":"Georgianna Zulauf","email":"thea@kuhlman.info","phone":"967.750.9492 x92556","sponsoring_entity":"Brown, Stamm and Goyette","content":"Sapiente aspernatur velit est eaque consequuntur modi. Nam omnis sit aliquid. Omnis quaerat aspernatur incidunt reprehenderit tempore atque ex. Exercitationem nesciunt nobis."},{"id":7,"user_id":1,"name":"Ms. Brooks Zieme","email":"corene.bergstrom@kilback.co","phone":"(830) 578-9174 x456","sponsoring_entity":"Hammes Group","content":"Sed culpa hic vel reiciendis commodi et. Asperiores nostrum cum beatae in doloremque. Unde ad aut et animi. Tenetur dolores dolores sed qui non."},{"id":8,"user_id":1,"name":"Araceli Pagac","email":"yazmin@walter.io","phone":"(300) 300-7902 x3542","sponsoring_entity":"Herman, Gulgowski and Jones","content":"Repellendus dolorum perferendis facere voluptatem cumque delectus mollitia. Ut explicabo reprehenderit nulla architecto. Ipsum quo et sed soluta. Repudiandae velit aut nulla harum deleniti veniam. Impedit illum accusantium dolorem distinctio illo."},{"id":9,"user_id":1,"name":"Cole Feest II","email":"joaquin@rippincorkery.name","phone":"(155) 912-0729 x281","sponsoring_entity":"Schuster, Ferry and Hickle","content":"Sunt et et temporibus dignissimos aut. Enim quod deserunt. Molestiae aut recusandae."},{"id":10,"user_id":1,"name":"Erica Halvorson II","email":"omari.wolf@lakin.co","phone":"(632) 980-6166 x19775","sponsoring_entity":"Bechtelar-Hilpert","content":"Delectus minima architecto aut distinctio possimus eligendi maxime. Ducimus sed molestiae rerum. Sit veritatis praesentium aut qui ullam mollitia."}]);

// asdf = (1..10).map{|idx| {id: idx, name: Faker::Name.name, email: Faker::Internet.email, phone: Faker::PhoneNumber.phone_number, sponsoring_entity: Faker::Company.name, content: Faker::Lorem.paragraph} }
// puts asdf.to_json
//
// {name: Faker::Name.name, email: Faker::Internet.email, phone: Faker::PhoneNumber.phone_number, sponsoring_entity: Faker::Company.name, content: Faker::Lorem.paragraph}
// ruby -e 'require "json"; require "faker"; puts(JSON.dump((1..10).map{{name: Faker::Name.name, email: Faker::Internet.email, phone: Faker::PhoneNumber.phone_number, sponsoring_entity: Faker::Company.name, content: Faker::Lorem.paragraph}}))' | pbcopy
// 
    });
};

