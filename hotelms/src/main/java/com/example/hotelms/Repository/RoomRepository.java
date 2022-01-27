package com.example.hotelms.Repository;

import com.example.hotelms.Entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoomRepository extends JpaRepository<Room,String> {

   //

  /*@Query(value="SELECT * FROM room WHERE b_id = :branchId",nativeQuery = true)
   Optional<Room> findByBranchId(@Param("branchId") Integer branchId);*/
}
