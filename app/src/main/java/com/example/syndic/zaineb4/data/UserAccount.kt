package com.example.syndic.zaineb4.data

import com.google.firebase.firestore.IgnoreExtraProperties
import com.google.firebase.firestore.PropertyName

/**
 * Represents a user account with specific permissions and status.
 */
@IgnoreExtraProperties
data class UserAccount(
    val uid: String = "",
    val email: String = "",
    val role: String = "resident", // "admin" or "resident"
    var approved: Boolean = false,
    val name: String = "",
    val phone: String = "",
    val apartment: String = "",
    val building: String = ""
)
