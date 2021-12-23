package com.example.Hotel_managment.Model.Service;

        import com.example.Hotel_managment.Model.Entities.Room;
        import com.example.Hotel_managment.Model.Repository.RoomRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;

        import java.util.List;
        import java.util.Optional;

@Service
public class RoomService {
        private RoomRepository roomRepository;
        @Autowired
        public RoomService(RoomRepository roomRepository) {
                this.roomRepository = roomRepository;
        }

        public Optional<Room> getRoom(Integer roomId) {
                return roomRepository.findById(roomId);

        }

        public List<Room> getRooms() {
                return roomRepository.findAll();
        }
        public void addNewRoom(Room room) {
                roomRepository.save(room);
        }
        public void deleteUser(Integer roomId) {
                roomRepository.deleteById(roomId);

        }

}

